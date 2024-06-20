from flask import Flask, render_template, url_for, redirect
from contactForm import Contact

app=Flask(__name__)
app.config['SECRET_KEY']="4fbbd108-3903-4640-86cb-b33574fb3888"

@app.route('/')
@app.route('/home')
def home():
    return render_template('home.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/project')
def project():
    return render_template('project.html')

@app.route('/contact')
def contact():
    my_form=Contact()
    if my_form.validate_on_submit():
        return redirect(url_for("home"))
    return render_template('contact.html', form=my_form)

@app.route('/blog')
def blog():
    return render_template('blog.html')

if __name__=='__main__':
    app.run(debug=True)