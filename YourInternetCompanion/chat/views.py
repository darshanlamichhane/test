from django.shortcuts import render
from .models import Post


def index(request):
    return render(request, 'chat/index.html')


def home(request):
    context = {
        'posts': Post.objects.all()
    }
    return render(request, 'chat/home.html', context)
