from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_201_CREATED, HTTP_400_BAD_REQUEST

from .models import Teacher
from .models import Classroom
from .serializers import (TeacherSerializer, CreateClassroomSerializer, ClassroomSerializer)

class TeacherView(APIView):
    def get(self, request):
        teachers = Teacher.objects.all()
        serializer = TeacherSerializer(teachers, many=True)
        return Response(serializer.data, status=HTTP_200_OK)

class ClassroomView(APIView):
    def get(self, request):
        classrooms = Classroom.objects.all()
        serializer = ClassroomSerializer(classrooms, many=True)
        return Response(serializer.data, status=HTTP_200_OK)

class CreateClassroomView(APIView):
    def post(self, request, id, format=None):
        teacher = get_object_or_404(Teacher, id=id)
        serializer = CreateClassroomSerializer(data=request.data)
        if serializer.is_valid():
            classroom = Classroom(
                name=serializer.validated_data['name'],
                email=serializer.validated_data['email'],
                teacher=teacher
            )
            classroom.save()
            classroom_serializer = ClassroomSerializer(classroom, many=False)
            return Response(classroom_serializer.data, status=HTTP_201_CREATED)
        return Response({"message": "Erro de validação no cadastro", "errors": serializer.errors}, status=HTTP_400_BAD_REQUEST)