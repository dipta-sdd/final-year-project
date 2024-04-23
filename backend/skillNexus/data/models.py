
from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    bio = models.TextField(blank=True)
    mobile = models.TextField(blank=True)
    country = models.CharField(max_length=255, blank=True, null=True)
    profile_picture = models.ImageField(
        upload_to='profile_pictures/', blank=True)
    rating = models.DecimalField(max_digits=2, decimal_places=1, default=0.0)
    role = models.CharField(max_length=50, choices=[
        ('Employer', 'Employer'),
        ('Student', 'Student'),
        ('Freelancer', 'Freelancer'),
        ('Educator', 'Educator'),
        ('University', 'University')
    ])
    last_login = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name} ({self.username})"


class Category(models.Model):
    name = models.CharField(max_length=255)


class Subcategory(models.Model):
    name = models.CharField(max_length=255)


class Skill(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    subcategories = models.ManyToManyField(Subcategory, blank=True)


class Education(models.Model):
    institution = models.CharField(max_length=255)
    degree = models.CharField(max_length=255)
    field_of_study = models.CharField(max_length=255)
    graduation_year = models.PositiveIntegerField()
    start_date = models.DateField()


class Project(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    skills_required = models.ManyToManyField(Skill)
    status = models.CharField(max_length=20, choices=[(
        'open', 'Open'), ('closed', 'Closed'), ('in_progress', 'In Progress')])
    participants = models.ManyToManyField(
        User, related_name='projects_participated',  null=True)
    start_date = models.DateField()
    end_date = models.DateField()


class Review(models.Model):
    author = models.ForeignKey(
        User, on_delete=models.SET_NULL, related_name='reviews_given', null=True)
    subject = models.ForeignKey(
        User, on_delete=models.SET_NULL, related_name='reviews_received', null=True)
    rating = models.PositiveIntegerField()
    description = models.TextField()
    date = models.DateField()


class Program(models.Model):
    university = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='programs')
    name = models.CharField(max_length=255)
    description = models.TextField()
    duration = models.PositiveIntegerField()
    cost = models.DecimalField(max_digits=10, decimal_places=2)


class Course(models.Model):
    program = models.ForeignKey(
        Program, on_delete=models.CASCADE, related_name='courses')
    name = models.CharField(max_length=255)
    description = models.TextField()
    start_date = models.DateField()
