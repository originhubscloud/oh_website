from django.db import models
import datetime
import pdb
from django import forms
from django.db import models
from django.conf import settings
from django.contrib.auth.models import User
from django.contrib.auth.models import Group
from django.db.models.signals import post_save
from django.db.models.signals import post_delete
from django.contrib.auth.decorators import login_required
from django.core.validators import RegexValidator

class subscribed_people (models.Model):
    
    user_name = models.CharField(max_length=250,blank=True,null=True)
    user_email = models.CharField(max_length=250,blank=True,null=True)
    
    class Meta:
        verbose_name = "subscribed_people"
        verbose_name_plural = "subscribed_peoples"
        
class Queried_list (models.Model):
    
    user_name = models.CharField(max_length=250,blank=True,null=True)
    user_email = models.CharField(max_length=250,blank=True,null=True)
    user_phone = models.CharField(max_length=250,blank=True,null=True)
    user_message = models.TextField(blank=True,null=True)
    date = models.DateTimeField(auto_now_add=True, blank=True)
    class Meta:
        verbose_name = "Queried_list"
        verbose_name_plural = "Queried_lists"