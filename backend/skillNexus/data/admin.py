from django.contrib import admin

# Register your models here.
from .models import *

admin.site.register(User)
admin.site.register(PersonalDetails)
admin.site.register(Edu_level)
admin.site.register(Edu_degree)
admin.site.register(Edu_group_or_major)
