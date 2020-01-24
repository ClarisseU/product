from django.shortcuts import render, redirect
from django.http import HttpResponse, Http404, HttpResponseRedirect
from .models import Product
from .forms import productForm

# Create your views here.
def welcome(request):
    products = Product.objects.all()
    return render(request, 'index.html', {'products': products})

def product(request, id):
    try:
        products = Product.objects.get(id=id)
    except DoesNotExist:
        raise Http404()
    return render (request, 'index.html', {'products': products})

def new_product(request):
    if request.method == 'POST':
        form = productForm(request.POST, request.FILES)
        if form.is_valid():
            prod = form.save(commit=False)
            prod.save()
        return redirect('welcome')
    else:
        form = productForm()
    return render (request, 'new_product.html', {"form":form})