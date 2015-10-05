from django.conf.urls import patterns, include, url
from django.contrib import admin
from corn import views
from django.conf import settings

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'corn_project.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^cornStories/$', views.cornStories, name="cornStories"),
    url(r'^sendCornStory/', views.addCornStory, name='addCornStory'),
)

# If index.html or nothing (/), then serve static html into url
###############################################################
if settings.DEBUG:
    urlpatterns += patterns(
        'django.contrib.staticfiles.views',
        url(r'^$', 'serve', kwargs={'path': 'html/corn.html'}),
        url(r'^cornography/$', 'serve', kwargs={'path': 'html/cornography.html'}),
        url(r'^(?:cornography.html)?$', 'serve', kwargs={'path': 'html/cornography.html'}),
        url(r'^jokes/$', 'serve', kwargs={'path': 'html/jokes.html'}),
        url(r'^(?:jokes.html)?$', 'serve', kwargs={'path': 'html/jokes.html'}),
        url(r'^games/$', 'serve', kwargs={'path': 'html/games.html'}),
        url(r'^(?:games.html)?$', 'serve', kwargs={'path': 'html/games.html'}),
        url(r'^subscribe/$', 'serve', kwargs={'path': 'html/subscribe.html'}),
        url(r'^(?:subscribe.html)?$', 'serve', kwargs={'path': 'html/subscribe.html'}),
        url(r'^(?P<path>(?:js|css|img)/.*)$', 'serve'),
    )
