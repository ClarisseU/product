from django.test import TestCase
from .models import Product

# Create your tests here.
class ProductTest(TestCase):
    '''
    a class to test the Product instances and its methods
    '''
    def setUp(self):
        self.product = Product(name='keyboard', detail="a wireless computer keyboard",price"45,000", manufactured="12/11/2018")
        
    def test_instance(self):
        self.assertTrue(isinstance(self.location, Location))
        
    def test_save_product(self):
        '''
        function to check the save method
        '''
        self.product.save_product()
        prod = Product.objects.all()
        self.assertTrue(len(prod)>0)