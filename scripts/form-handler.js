// Jianxin You 20134401
// Hoang-Thi-Thi Cynthia Phan 20220019

// Add a custom method for validating the credit card expiry
$.validator.addMethod("creditCardExpiry", function(value, element) {
    // Use a regular expression to check that the value is in the mm/yy format
    return this.optional(element) || /^(0[1-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|3[0-1])$/.test(value);
  }, "La date d’expiration de votre carte de crédit est invalide.");
   
  // Validate the form when it is submitted
  $("#order-form").validate({
    // Specify validation rules for each field
    rules: {
      firstName: {
        required: true,
        minlength: 2
      },
      lastName: {
        required: true,
        minlength: 2
      },
      email: {
        required: true,
        email: true
      },
      phone: {
        required: true,
        phoneUS: true
      },
      creditCard: {
        required: true,
        pattern: /^\d{16}$/
      },
      creditCardExpiry: {
        required: true,
        creditCardExpiry: true
      }
    },

    // Display error messages below each field
    errorPlacement: function(error, element) {
      element.after('<div></div>');
      element.next().append(error);
    },
    // Submit the form if all fields are valid
    submitHandler: function(form) {
      // Remove items from the shopping cart
      // Create an order using the customer's name and a unique order number
        form.submit();
      
    }
  });
  