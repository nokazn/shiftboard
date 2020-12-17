from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

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
