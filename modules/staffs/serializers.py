from app import ma
from .models import Staff

class StaffSchema(ma.SQLAlchemySchema):
  class Meta:
    strict = True
    model = Staff

  staff_id = ma.auto_field()
  nickname = ma.auto_field()
  _links = ma.Hyperlinks(
    {
      'collection': ma.URLFor('staffs.all_staffs'),
      'self': ma.URLFor('staffs.staff_detail', values=dict(staff_id='<staff_id>')),
    }
  )

staff_schema = StaffSchema()
staff_schemas = StaffSchema(many=True)
