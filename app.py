from flask import Flask, render_template, Blueprint
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from config.config import Config

app = Flask(__name__, static_folder='./client/build/static', template_folder='./client/build')
app.config.from_object('config.config.Config')
app.config['JSON_AS_ASCII'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)

# register blueprint after initializing db & ma
from modules.staffs.views import app as staffs

app.register_blueprint(staffs)

# render template
@app.route('/')
def index():
  return render_template('index.html')

# @Blueprint.after_request

@app.after_request
def allow_cors(response):
  header = response.headers
  header['Access-Control-Allow-Origin'] = Config.CLIENT_URL
  header['Access-Control-Allow-Headers'] = 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept'
  header['Access-Control-Allow-Methods'] = 'PUT, DELETE, OPTIONS'
  header['Access-Control-Allow-Credentials'] = True
  return response
