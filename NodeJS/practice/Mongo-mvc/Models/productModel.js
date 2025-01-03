const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    product_name: {
        type: String,
        required: true,
    },
    product_price: {
        type: String,
        required: true,
    },
    IsInStock: {
        type: Boolean,
        required: true,
    },
    category: {
        type: [String],
        required: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
    },
    confirmPassword: {
        type: String,
        required: true,
        minLength: 8,
        validate: {
            validator: function() {
                return this.password === this.confirmPassword;
            },
            message: 'Password and confirm password could be same',
        }
    }
}, {timestamps: true});

const validCategories = ["electronics", "clothes", "stationery", "furniture"];
productSchema.pre("save", function (next) {
    console.log("pre save hook");
    const invalidCategories = this.category.filter((category) => {
      return !validCategories.includes(category);
    });
    if (invalidCategories.length > 0) {
      // error
      return next(
        new Error(`Invalid categories: ${invalidCategories.join(",")}`)
      );
    } else {
      // success
      next();
    }
});
const ProductModel = mongoose.model('products', productSchema);

module.exports = ProductModel;
