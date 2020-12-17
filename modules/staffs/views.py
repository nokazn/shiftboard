from flask import Blueprint, jsonify, request
from .models import Staff
from .serializers import staff_schema, staff_schemas

app = Blueprint('staffs', __name__)

@app.route('/api/staffs')
def all_staffs():
  staffs = Staff.get_staffs()
  return jsonify({ "staffs": staff_schemas.dump(staffs) })

@app.route('/api/staffs/<staff_id>')
def staff_detail(staff_id):
  staff = Staff.get_staff(staff_id)
  if not staff:
    return jsonify({ 'message': 'Not Found' }), 404
  return jsonify(staff_schema.dump(staff)), 200

@app.route('/api/staffs', methods=['POST'])
def add_staff():
  nickname = request.args.get('nickname')
  Staff.add_staff(nickname)
  return jsonify({}), 204

@app.route('/api/staffs/<staff_id>', methods=['DELETE'])
def delete_staff(staff_id):
  Staff.delete_staff(staff_id)
  return jsonify({}), 204
