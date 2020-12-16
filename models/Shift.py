from db.database import db

class Shift(db.Model):
  __tablename__ = 'shifts'
  day = db.Column(db.Date(), primary_key=True)
  staff_id = db.Column(db.String(), primary_key=True)
  start_time = db.Column(db.Time(), nullable=False)
  end_time = db.Column(db.Time(), nullable=False)
