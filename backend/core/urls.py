from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import LanguageViewSet, ExpertViewSet, DashboardMetricsView

router = DefaultRouter()
router.register(r'languages', LanguageViewSet)
router.register(r'experts', ExpertViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('dashboard/metrics/', DashboardMetricsView.as_view(), name='dashboard-metrics'),
]
