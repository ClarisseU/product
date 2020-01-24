from django.conf.urls import url
from . import views
from django.conf import settings

urlpatterns=[
    url(r'^$', views.welcome, name ='welcome'),
    url(r'^product/(?P<id>[\w-]+)/$', views.product, name='product'),
    url(r'^new/product$', views.new_product, name="new-product")
]