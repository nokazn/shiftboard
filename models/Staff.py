from models.Shift import Shift
from db.database import db

def serialize_staff(staff):
  if staff == None:
    return None
  return {
    'staff_id': staff.staff_id,
    'nickname': staff.nickname,
  }

class Staff(db.Model):
  __tablename__ = 'staffs'
  staff_id = db.Column(db.String(), primary_key=True)
  nickname = db.Column(db.String(), primary_key=False)

  def get_staffs():
    staffs = Staff.query.order_by(Staff.staff_id).all()
    staffs = list(map(serialize_staff, staffs))
    return staffs

  def get_staff(staff_id):
    staff = Staff.query.filter(Staff.staff_id == staff_id).one_or_none()
    return serialize_staff(staff)

  def add_staff(nickname):
    max_id_num = db.session.query(db.func.max(Staff.staff_id)).scalar()
    if max_id_num == None:
      max_id_num = 0
    staff_id = str(int(max_id_num) + 1).zfill(6)
    staff = Staff(staff_id=staff_id, nickname=nickname)
    db.session.add(staff)
    db.session.commit()

  def delete_staff(staff_id):
    db.session.query(Shift).filter(Shift.staff_id == staff_id).delete()
    db.session.query(Staff).filter(Staff.staff_id == staff_id).delete()
    db.session.commit()
