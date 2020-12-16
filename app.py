from flask import Flask, render_template, jsonify
import db.database as db
import models

app = Flask(__name__, static_folder='./client/build/static', template_folder='./client/build')
app.config.from_object('config.config.Config')
app.config['JSON_AS_ASCII'] = False
app = db.init_db(app)

# render template
@app.route('/')
def index():
  return render_template('index.html')

# api
@app.route('/api/staff')
def staff_list():
  staffs = models.Staff.get_staffs()
  return jsonify(staffs=staffs)