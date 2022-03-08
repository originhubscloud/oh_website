from django.shortcuts import render

# Create your views here.
from django.shortcuts import render,redirect
from django.views.generic  import View
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required
from django.core.serializers.json import DjangoJSONEncoder
from django.http import HttpResponse,HttpResponseBadRequest, HttpResponseRedirect
import json
from django.contrib.auth import login as auth_login
from django.contrib.auth import logout as auth_logout
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.conf import settings
mymediaroot = settings.MEDIA_ROOT
import requests
from .models import *
import sys
from django.http import JsonResponse
from django.core.exceptions import ObjectDoesNotExist
from django.core.files.storage import FileSystemStorage
import pdb
from io import StringIO,BytesIO
from django.core.files import File
import pandas as pd

class Login(View):
    @method_decorator(csrf_exempt)
    def dispatch(self, *args, **kwargs):
        return super(Login, self).dispatch(*args, **kwargs)

    def get(self, request, *args, **kwargs):

        return render(request, 'login.html', locals())
    def post(self, request, next='', *args, **kwargs):
        #import pdb;pdb.set_trace()
        contenttype = request.META.get('CONTENT_TYPE', None)
        data_dict = None
        # auth_logout(request)
        if 'json' in contenttype:
            try:
                data_dict = json.loads(request.body.decode('utf-8'))
            except Exception as e:
                print(e)
        elif contenttype == 'application/x-www-form-urlencoded':
            data_dict = request.POST
        elif contenttype == 'multipart/form-data; boundary=----WebKitFormBoundaryv31dyJDa9ByCTvcp':
            data_dict = request.POST
        else:
            pdr = HttpResponse(status=400)
            pdr.write('Unknown HTTP ContentTye')
            return pdr
        payload={}
        try:
            userObj = User.objects.filter(username=data_dict.get("username"))
        except:
            payload['error_status'] = 'User Name'
            resp = HttpResponse(content_type="application/json", status=330)
            resp.write(json.dumps(payload))
            return resp

        req_username = data_dict.get("username")
        req_password = data_dict.get("password")
        #import pdb;pdb.set_trace()
        if userObj:
            if not request.user.is_authenticated:
                user = authenticate(request,username=req_username, password=req_password)
                if user is not None:
                    if user.is_active:
                        #request.session.set_expiry(120)
                        auth_login(request, user)
                        if request.session.test_cookie_worked():
                            request.session.delete_test_cookie()
                        payload['user_login_status'] = 'User Login..'
                        if user.is_superuser:
                            payload['user_role'] = "superuer"
                        else:
                            payload['user_role'] = "student"
                        
                        
                        resp = HttpResponse(json.dumps(payload), content_type='application/json', status=200)
                        return resp
                    else:
                        payload['error_status'] = 'Password'
                        resp = HttpResponse(content_type="application/json", status=401)
                        resp.write(json.dumps(payload))
                        return resp
                else:
                    payload['error_status'] = 'Password'
                    resp = HttpResponse(content_type="application/json", status=401)
                    resp.write(json.dumps(payload))
                    return resp
            else:
               
                payload['user_login_status'] = 'User Login..'
                resp = HttpResponse(json.dumps(payload), content_type='application/json', status=200)
                return resp
        else:
            payload['error_status'] = 'Invalid credentials'
            resp = HttpResponse(json.dumps(payload), content_type='application/json', status=401)
            return resp        
class Home(View):
    def dispatch(self, *args, **kwargs):
        return super(Home, self).dispatch(*args, **kwargs)

    def get(self, request, *args, **kwargs):

        return render(request, 'index.html', locals())
class Org_admin_dash(View):
    def dispatch(self, *args, **kwargs):
        return super(Org_admin_dash, self).dispatch(*args, **kwargs)

    def get(self, request, *args, **kwargs):

        return render(request, 'org_dash.html', locals())
        
class Org_quires(View):
    def dispatch(self, *args, **kwargs):
        return super(Org_quires, self).dispatch(*args, **kwargs)

    def get(self, request, *args, **kwargs):
        #import pdb;pdb.set_trace()
        quires_data = Queried_list.objects.all()
        #quires_data_df = pd.DataFrame(quires_data.values()[::1])
        return render(request, 'quires.html', locals()) 
        
class Org_subscribe(View):
    
    def dispatch(self, *args, **kwargs):
        return super(Org_subscribe, self).dispatch(*args, **kwargs)

    def get(self, request, *args, **kwargs):
        #import pdb;pdb.set_trace()
        sub_data = subscribed_people.objects.all()
        #quires_data_df = pd.DataFrame(quires_data.values()[::1])
        return render(request, 'subscribe.html', locals())

class Digital_Transform(View):
    def dispatch(self, *args, **kwargs):
        return super(Digital_Transform, self).dispatch(*args, **kwargs)

    def get(self, request, *args, **kwargs):

        return render(request, 'digital-transformation.html', locals())
class Devops(View):
    def dispatch(self, *args, **kwargs):
        return super(Devops, self).dispatch(*args, **kwargs)

    def get(self, request, *args, **kwargs):

        return render(request, 'devops.html', locals())
class QA_automation(View):
    def dispatch(self, *args, **kwargs):
        return super(QA_automation, self).dispatch(*args, **kwargs)

    def get(self, request, *args, **kwargs):

        return render(request, 'qa-automation.html', locals())
class UX(View):
    def dispatch(self, *args, **kwargs):
        return super(UX, self).dispatch(*args, **kwargs)

    def get(self, request, *args, **kwargs):

        return render(request, 'ux.html', locals())
class Bussiness_Analytics(View):
    def dispatch(self, *args, **kwargs):
        return super(Bussiness_Analytics, self).dispatch(*args, **kwargs)

    def get(self, request, *args, **kwargs):

        return render(request, 'businessanalytics.html', locals())
class Cloud_consulting(View):
    def dispatch(self, *args, **kwargs):
        return super(Cloud_consulting, self).dispatch(*args, **kwargs)

    def get(self, request, *args, **kwargs):

        return render(request, 'cloud-consulting.html', locals())
class Full_stack(View):
    def dispatch(self, *args, **kwargs):
        return super(Full_stack, self).dispatch(*args, **kwargs)

    def get(self, request, *args, **kwargs):

        return render(request, 'fullstack.html', locals())
class Blockchain(View):
    def dispatch(self, *args, **kwargs):
        return super(Blockchain, self).dispatch(*args, **kwargs)

    def get(self, request, *args, **kwargs):

        return render(request, 'blockchain.html', locals())
class ERP(View):
    def dispatch(self, *args, **kwargs):
        return super(ERP,self).dispatch(*args, **kwargs)

    def get(self, request, *args, **kwargs):

        return render(request, 'ERP.html', locals())
class CRM(View):
    def dispatch(self, *args, **kwargs):
        return super(CRM,self).dispatch(*args, **kwargs)

    def get(self, request, *args, **kwargs):

        return render(request, 'CRM.html', locals())
class Health_tech(View):
    def dispatch(self, *args, **kwargs):
        return super(Health_tech,self).dispatch(*args, **kwargs)

    def get(self, request, *args, **kwargs):

        return render(request, 'health_tech.html', locals())
class Fintech(View):
    def dispatch(self, *args, **kwargs):
        return super(Fintech,self).dispatch(*args, **kwargs)

    def get(self, request, *args, **kwargs):

        return render(request, 'fintech.html', locals())
class Insurence(View):
    def dispatch(self, *args, **kwargs):
        return super(Insurence,self).dispatch(*args, **kwargs)

    def get(self, request, *args, **kwargs):

        return render(request, 'insurence.html', locals())
class Healthcare(View):
    def dispatch(self, *args, **kwargs):
        return super(Healthcare,self).dispatch(*args, **kwargs)

    def get(self, request, *args, **kwargs):

        return render(request, 'healthcare.html', locals())
class Telecom(View):
    def dispatch(self, *args, **kwargs):
        return super(Telecom,self).dispatch(*args, **kwargs)

    def get(self, request, *args, **kwargs):

        return render(request, 'telecom.html', locals())
class About(View):
    def dispatch(self, *args, **kwargs):
        return super(About,self).dispatch(*args, **kwargs)

    def get(self, request, *args, **kwargs):

        return render(request, 'aboutus.html', locals())
class Contact(View):
    def dispatch(self, *args, **kwargs):
        return super(Contact,self).dispatch(*args, **kwargs)

    def get(self, request, *args, **kwargs):

        return render(request, 'contact.html', locals())
    def post(self, request,*args, **kwargs):
        #import pdb;pdb.set_trace()
        contenttype = request.META.get('CONTENT_TYPE', None)
        data_dict = None
        # auth_logout(request)
        if 'json' in contenttype:
            try:
                data_dict = json.loads(request.body.decode('utf-8'))
            except Exception as e:
                print(e)
        elif contenttype == 'application/x-www-form-urlencoded':
            data_dict = request.POST
        elif contenttype == 'multipart/form-data; boundary=----WebKitFormBoundaryv31dyJDa9ByCTvcp':
            data_dict = request.POST
        elif 'multipart/form-data;' in contenttype:
            data_dict = request.POST.dict()
        else:
            pdr = HttpResponse(status=400)
            pdr.write('Unknown HTTP ContentTye')
            return pdr
        data = data_dict
        Queried_list_obj = Queried_list()
        Queried_list_obj.user_name = data.get('name')
        Queried_list_obj.user_email = data.get('email')
        Queried_list_obj.user_phone = data.get('phone')
        Queried_list_obj.user_message = data.get('message')
        Queried_list_obj.save()
        resp = HttpResponse(json.dumps(data_dict), content_type='application/json', status=200)
        return resp
        
            
class Carrers(View):
    def dispatch(self, *args, **kwargs):
        return super(Carrers,self).dispatch(*args, **kwargs)

    def get(self, request, *args, **kwargs):

        return render(request, 'careers.html', locals())
class Culture(View):
    def dispatch(self, *args, **kwargs):
        return super(Culture,self).dispatch(*args, **kwargs)

    def get(self, request, *args, **kwargs):

        return render(request, 'culture.html', locals())
class CSR(View):
    def dispatch(self, *args, **kwargs):
        return super(CSR,self).dispatch(*args, **kwargs)

    def get(self, request, *args, **kwargs):

        return render(request, 'csr.html', locals())
class Subscribe(View):
    
    def dispatch(self, *args, **kwargs):
        return super(Subscribe,self).dispatch(*args, **kwargs)
    def post(self, request,*args, **kwargs):
        #import pdb;pdb.set_trace()
        contenttype = request.META.get('CONTENT_TYPE', None)
        data_dict = None
        # auth_logout(request)
        if 'json' in contenttype:
            try:
                data_dict = json.loads(request.body.decode('utf-8'))
            except Exception as e:
                print(e)
        elif contenttype == 'application/x-www-form-urlencoded':
            data_dict = request.POST
        elif contenttype == 'multipart/form-data; boundary=----WebKitFormBoundaryv31dyJDa9ByCTvcp':
            data_dict = request.POST
        elif 'multipart/form-data;' in contenttype:
            data_dict = request.POST.dict()
        else:
            pdr = HttpResponse(status=400)
            pdr.write('Unknown HTTP ContentTye')
            return pdr
        data = data_dict
        subscribed_people_obj = subscribed_people()
        subscribed_people_obj.user_name = data.get('name')
        subscribed_people_obj.user_email = data.get('email')
        subscribed_people_obj.save()
        resp = HttpResponse(json.dumps(data_dict), content_type='application/json', status=200)
        return resp
        
            