from flask_wtf import FlaskForm # type: ignore
from wtforms import StringField,EmailField,SubmitField, TextAreaField  # type: ignore
from wtforms.validators import DataRequired,Email # type: ignore

class Contact(FlaskForm):
    name = StringField('Name', validators=[DataRequired()])
    email=EmailField('Email',validators=[DataRequired(),Email()])
    msg=TextAreaField('Message', validators=[DataRequired()])
    sub=SubmitField('Send Message')
