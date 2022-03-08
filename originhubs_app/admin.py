from django.contrib import admin

# Register your models here.
from .models import *


admin.site.register(subscribed_people)
admin.site.register(Queried_list)