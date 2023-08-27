from django.shortcuts import render

def userInterface(request):
    try:
        return render(request, 'Index.html')
    except Exception as e:
        print("Error:", e)