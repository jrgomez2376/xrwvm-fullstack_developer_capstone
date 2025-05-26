from django.urls import path
from django.conf.urls.static import static
from django.conf import settings
from . import views

app_name = 'djangoapp'

#Updated this code (Added "logout" path)
urlpatterns = [
    path(route='login', view=views.login_user, name='login'),
    path('logout', view=views.logout_user, name='logout'), 
    path(route='register', view=views.registration, name='register'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)



#
# Uncomment the imports before you add the code
#from django.urls import path
#from django.conf.urls.static import static
#from django.conf import settings
#from . import views

#app_name = 'djangoapp'
#urlpatterns = [
    # # path for registration

    # path for login
    #path(route='login', view=views.login_user, name='login'),
    #path('djangoapp/', include('djangoapp.urls')),

# This serves the React login page
    #path('login/', TemplateView.as_view(template_name="index.html")),


    # path for dealer reviews view

    # path for add a review view

#] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
