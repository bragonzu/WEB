from django.http import HttpResponse, JsonResponse
from django.shortcuts import render,redirect,get_object_or_404
from django.contrib.auth.forms import UserCreationForm
from django.contrib import  messages
from django.contrib.auth.models import User
from .models import Category,Product
from .forms import CreateNewProduct,RegisterForm



# Create your views here.
def register ( request ) :
    if request.method == 'POST':
        form = RegisterForm(request.POST)
        if form.is_valid():
            User.objects.create(
                username=request.POST["username"],
                email=request.POST["email"],
                age=request.POST["age"],
                address=request.POST["address"],
                image=request.POST["image"],
                )
            form.save()
            messages.success ( request ,'Welcome { username }, your account is activated')
            return redirect ('about.html')
    else :
        form = RegisterForm()
    return render (request ,'users/register.html',{'form' :form} )



def index(request):
    title = 'Welcome Django'
    return render(request, 'index.html', {
        'title': title
    })


def about(request):
    return render(request, 'about.html')

def products(request):
    # task=get_object_or_404(Task.objects.get(id=id))
    products = Product.objects.all()
    return render(request, 'products/products.html', {
        'products': products
    })  

def create_product(request):
    if request.method == 'POST':
        form = CreateNewProduct(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request ,'Producto agregado')
            return redirect('products')
    else :
        form = CreateNewProduct()
    return render (request ,'products/create_products.html',{'form' :form} )

   

