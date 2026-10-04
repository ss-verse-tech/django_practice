from django.urls import path, include
from product_app import views
urlpatterns = [
    path("", views.productShow),
    path("data/", views.show_data),
    path("about/", views.about, name = "about")
]
