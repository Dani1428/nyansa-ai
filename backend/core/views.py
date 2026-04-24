from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import Language, Expert
from datasets.models import Dataset
from contact.models import ContactMessage
from .serializers import LanguageSerializer, ExpertSerializer

class LanguageViewSet(viewsets.ModelViewSet):
    queryset = Language.objects.all()
    serializer_class = LanguageSerializer
    # permission_classes = [IsAuthenticated] # Optional: Protect endpoints

class ExpertViewSet(viewsets.ModelViewSet):
    queryset = Expert.objects.all()
    serializer_class = ExpertSerializer

class DashboardMetricsView(APIView):
    # permission_classes = [IsAuthenticated]

    def get(self, request):
        total_datasets = Dataset.objects.count()
        active_projects = ContactMessage.objects.exclude(status='Rejected').count()
        total_experts = Expert.objects.filter(status='Active').count()
        
        # Example dynamic pipeline data, ideally this would be real analytics
        translation_accuracy = [82, 85, 88, 91, 94] 
        project_trends = [20, 45, 38, 65, 52, 78]
        
        return Response({
            'total_datasets': total_datasets,
            'active_projects': active_projects,
            'total_experts': total_experts,
            'translation_accuracy': translation_accuracy,
            'project_trends': project_trends
        })
