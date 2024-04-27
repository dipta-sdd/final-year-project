
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.conf.urls.static import static
from django.conf import settings
from django.contrib import admin
from django.urls import path, include
from rest_framework.schemas import get_schema_view
urlpatterns = [
    path('api_schema', get_schema_view(title='API Schema',
                                       description="Guide for the REST API"), name='api_schema'),
    path('admin/', admin.site.urls),
    path('api/', include('api.urls'))
]


# //pic redirection

urlpatterns += staticfiles_urlpatterns()
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
