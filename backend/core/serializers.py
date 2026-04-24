from rest_framework import serializers
from .models import Language, Expert

class LanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Language
        fields = '__all__'

class ExpertSerializer(serializers.ModelSerializer):
    languages = serializers.StringRelatedField(many=True, read_only=True)
    
    class Meta:
        model = Expert
        fields = '__all__'
