"""originhubs URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls import *
from django.conf.urls.static import static
from django.contrib import admin
from django.contrib.auth import views as auth_views
from django.views import i18n
from django.urls import re_path
from django.conf.urls import url
#from django.conf.urls import include #, pathpatterns
from django.urls import include, path
from django.conf import settings
from django.views.generic import RedirectView
from django.contrib import admin
from originhubs_app.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^$', Home.as_view(), name='Home'),
    re_path(r'digital/transform/', Digital_Transform.as_view(), name='Digital_Transform'),
    re_path(r'devops/', Devops.as_view(), name='Devops'),
    re_path(r'qa/automation/', QA_automation.as_view(), name='QA_automation'),
    re_path(r'ux/', UX.as_view(), name='UX'),
    re_path(r'business/analytics/', Bussiness_Analytics.as_view(), name='Bussiness_Analytics'),
    re_path(r'cloud/counsulting/', Cloud_consulting.as_view(), name='Cloud_consulting'),
    re_path(r'fullstack/', Full_stack.as_view(), name='Full_stack'),
    re_path(r'blockchain/', Blockchain.as_view(), name='Blockchain'),
    re_path(r'erp/', ERP.as_view(), name='ERP'),
    re_path(r'crm/', CRM.as_view(), name='CRM'),
    re_path(r'health/tech', Health_tech.as_view(), name='Health_tech'),
    re_path(r'fintech/', Fintech.as_view(), name='Fintech'),
    re_path(r'insurence/', Insurence.as_view(), name='Insurence'),
    re_path(r'healthcare/', Healthcare.as_view(), name='Healthcare'),
    re_path(r'telecom/', Telecom.as_view(), name='Telecom'),
    re_path(r'aboutus/', About.as_view(), name='About'),
    re_path(r'contact/', Contact.as_view(), name='Contact'),
    re_path(r'careers/', Carrers.as_view(), name='Carrers'),
    re_path(r'culture/', Culture.as_view(), name='Culture'),
    re_path(r'csr/', CSR.as_view(), name='CSR'),
    re_path(r'subscribe/', Subscribe.as_view(), name='Subscribe'),
    re_path(r'login/', Login.as_view(), name='login'),
    re_path(r'organization/admin/portal/', Org_admin_dash.as_view(), name='Org_admin_dash'),
    re_path(r'organization/quires/', Org_quires.as_view(), name='Org_quires'),
    re_path(r'organization/subscrib/', Org_subscribe.as_view(), name='Org_subscribe'),
    
]
