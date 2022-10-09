from django.forms import ValidationError
from rest_framework import serializers
from .models import Teacher
from .models import Classroom

class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = '__all__'

class CreateClassroomSerializer(serializers.Serializer):
    email = serializers.EmailField(max_length=255)
    name = serializers.CharField(max_length=100)

    def validate_name(self, value):
        if len(value) < 3:
            raise ValidationError("O nome precisa ter no mínimo 3 caracteres")
        return value

class ClassroomSerializer(serializers.ModelSerializer):
    teacher = TeacherSerializer()
    class Meta:
        model = Classroom
        fields = '__all__'