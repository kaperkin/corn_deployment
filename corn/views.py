from django.shortcuts import render
from django.template import RequestContext, loader
from django.http import HttpResponse, HttpResponseRedirect
from django.views.decorators.csrf import csrf_exempt
from .models import CornStory
import json

# Create your views here.
@csrf_exempt
def cornography(request):
    template = loader.get_template('/corn/static/html/cornography.html')
    context = RequestContext(request)

@csrf_exempt
def jokes(request):
    template = loader.get_template('/corn/static/html/jokes.html')
    context = RequestContext(request)
    return HttpResponse(template.render(context))

@csrf_exempt
def games(request):
    template = loader.get_template('/corn/static/html/games.html')
    context = RequestContext(request)
    return HttpResponse(template.render(context))

@csrf_exempt
def subscribe(request):
    template = loader.get_template('/corn/static/html/subscribe.html')
    context = RequestContext(request)
    return HttpResponse(template.render(context))

@csrf_exempt
def cornStories(request):
    userCornStories = CornStory.objects.all()
    stories = []
    for corn in userCornStories:
        story = {
            "name": corn.name,
            "cornStory": corn.cornStory
            }
        stories.append(story)
    return HttpResponse(json.dumps(stories))

@csrf_exempt
def addCornStory(request):
    if request.POST:
        cs = CornStory()
        cs.name = request.POST["name"]
        cs.cornStory = request.POST["cornStory"]
        cs.save()
        return HttpResponse('Corn-gratulations! You made a corn story!')

