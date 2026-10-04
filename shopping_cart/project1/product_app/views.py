from django.shortcuts import render
from . import students_record

# Create your views here.
def productShow(request):
    return render(request, 'product.html')

def show_data(request):
    data = {
        "name":"Mohit",
        "age":20,
        "profession":"working as an engineer",
        "salary": "50000",
        "number_of_student":1
    }

    list = [
        {
            "name":"Mohit",
            "age":20,
            "profession":"working as an engineer",
            "salary": "50000",
        },
        {
            "name":"Sweety",
            "age":22,
            "profession":"working as doctor",
            "salary": "100000",
        },
        {
            "name":"Rinki",
            "age":25,
            "profession":"working as house wife",
            "salary": None,
        },
    ]
    return render(request, 'data.html', {"data":data , "list":list, "std_records": students_record.students_record})


def about(request):
    return render(request, 'about.html')