from db.database import db

class Staff(db.Model):
  __tablename__ = 'staffs'
  staff_id = db.Column(db.String(), primary_key=True)
  nickname = db.Column(db.String(), primary_key=False)

  def get_staffs():
    staffs = Staff.query.order_by(Staff.staff_id).all()
    return staffs
