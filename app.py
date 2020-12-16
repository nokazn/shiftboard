from flask import Flask, render_template, jsonify, request
from db.database import init_db
import models
import json

app = Flask(__name__, static_folder='./client/build/static', template_folder='./client/build')
app.config.from_object('config.config.Config')
app.config['JSON_AS_ASCII'] = False
app = init_db(app)

# render template
@app.route('/')
def index():
  return render_template('index.html')

# api
@app.route('/api/staffs')
def get_staffs():
  staffs = models.Staff.get_staffs()
  return jsonify({ "staffs": staffs })

@app.route('/api/staffs/<staff_id>')
def get_staff(staff_id):
  staff = models.Staff.get_staff(staff_id)
  if staff == None:
    return jsonify({ 'message': 'Not Found' }), 404
  return jsonify(staff), 200

@app.route('/api/staffs', methods=['POST'])
def add_staff():
  nickname = request.args.get('nickname')
  models.Staff.add_staff(nickname)
  return jsonify({}), 204

@app.route('/api/staffs/<staff_id>', methods=['DELETE'])
def delete_staff(staff_id):
  models.Staff.delete_staff(staff_id)
  return jsonify({}), 204
