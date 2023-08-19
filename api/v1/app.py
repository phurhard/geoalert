#!/usr/bin/python3
""" Flask Application for GeoAlert"""
from models import storage
from api.v1.views import app_views
from os import environ
from flask import Flask, render_template, make_response, jsonify
from flask_cors import CORS
from flasgger import Swagger
from flasgger.utils import swag_from
from flask_jwt_extended import (
    JWTManager, create_access_token, jwt_required, get_jwt_identity
)

app = Flask(__name__)
app.config['JSONIFY_PRETTYPRINT_REGULAR'] = True
app.config['JWT_SECRET_KEY'] = 'GeoAlert'  # Replace with your secret key
jwt = JWTManager(app)
app.register_blueprint(app_views)
CORS(app, resources={r"/api/*": {"origins": "*"}})


@app.teardown_appcontext
def close_db(error):
   """Closes and exits the storage"""
   storage.reload()
# uncomment to test the close function of db


@app.errorhandler(404)
def not_found(error):
    """Callback for 404errors"""
    return make_response(jsonify({'error': "Not Found"}), 404)

@app.errorhandler(500)
def not_found(error):
    """Callback for 500 errors"""
    return make_response(jsonify({'error': "Sorry there is a server error"}), 500)

app.config['SWAGGER'] = {
        'title': 'GeoAlert RESTful API',
        'uiversion': 1
        }

Swagger(app)


if __name__ == "__main__":
    '''Runs the flask app'''
    host = environ.get('HOST')
    port = environ.get('PORT')
    if not host:
        host = '0.0.0.0'
    if not port:
        port = '5000'
    app.run(host=host, port=port, threaded=True, debug=1)
