const { body, query, param} = require('express-validator');

module.exports = {
  submitApplication: [
    body('application_id')
      .notEmpty()
      .withMessage('Application ID is required')
      .isNumeric()
      .withMessage('Application ID must be a number'),
    body('messenger_id')
      .notEmpty()
      .withMessage('Messenger ID is required')
      .isLength({max:250})
      .withMessage('Messenger ID cannot exceed 250 characters'),
    body('net_take_home_pay')
      .notEmpty()
      .withMessage('Net Take Home Pay is required')
      .isNumeric()
      .withMessage('Net Take Home Pay must be a number')
      .isLength({max:18})
      .withMessage('Net Take Home Pay cannot exceed 18 characters'),
    body('loan_amount')
      .notEmpty()
      .withMessage('Loan Amount is required')
      .isNumeric()
      .withMessage('Loan Amount must be a number')
      .isLength({max:18})
      .withMessage('Loan Amount cannot exceed 18 characters'),
    body('term')
      .notEmpty()
      .withMessage('Term is required')
      .isLength({max:2})
      .withMessage('Term canno exceed 2 characters'),
    body('monthly_amortization')
      .notEmpty()
      .withMessage('Monthly amortization is required')  
      .isNumeric()
      .withMessage('Monthly amortization must be a number')
      .isLength({max:18})
      .withMessage('Monthly amortization cannot exceed 18 characters'),
    body('net_proceeds')
      .notEmpty()
      .withMessage('Net Proceeds is required')
      .isNumeric()
      .withMessage('Net Proceeds must be a number')
      .isLength({max:18})
      .withMessage('Net Proceeds cannot exceed 18 characters'),
    body('net_take_home_pay_after_deduction')
      .notEmpty()
      .withMessage('Net Take Home Pay After Deduction is required')
      .isNumeric()
      .withMessage('Net Take Home Pay After Deduction must be a number')
      .isLength({max:18})
      .withMessage('Net Take Home Pay After Deduction cannot exceed 18 characters'),
    body('service_fee')
      .notEmpty()
      .withMessage('Service Fee is required')
      .isLength({max:200})
      .withMessage('Service Fee cannot exceed 200 characters'),
    body('processing_fee')
      .notEmpty()
      .withMessage('Processing Fee is required')
      .isLength({max:200})
      .withMessage('Processing Fee cannot exceed 200 characters'),
    body('taxes')
      .notEmpty()
      .withMessage('Taxes is required')
      .isLength({max:200})
      .withMessage('Taxes cannot exceed 200 characters'),
    body('interest')
      .notEmpty()
      .withMessage('Interest is required')
      .isLength({max:200})
      .withMessage('Interest cannot exceed 200 characters'),
    body('first_name')
      .notEmpty()
      .withMessage('First Name is required')
      .isLength({max:200})
      .withMessage('First Name cannot exceed 200 characters'),
    body('last_name')
      .notEmpty()
      .withMessage('Last Name is required')
      .isLength({max:200})
      .withMessage('Last Name cannot exceed 200 characters'),
    body('middle_name')
      .if(body('middle_name').notEmpty())
      .isLength({max:200})
      .withMessage('Middle Name cannot exceed 200 characters'),
    body('gender')
      .notEmpty()
      .withMessage('Gender is required')
      .isLength({max:6})
      .withMessage('Gender cannot exceed 6 characters'),
    body('birthdate')
      .notEmpty()
      .withMessage('Birthdate is required')
      .isISO8601()
      .withMessage('Birthdate must be a valid date'),
    body('present_province')
      .notEmpty()
      .withMessage('Present Province is required')
      .isLength({max:200})
      .withMessage('Present Province cannot exceed 200 characters'),
    body('present_city')
      .notEmpty()
      .withMessage('Present City is required')
      .isLength({max:200})
      .withMessage('Precent City cannot exceed 200 characters'),
      body('present_barangay')
      .notEmpty()
      .withMessage('Present Barangay is required')
      .isLength({max:200})
      .withMessage('Present Barangay cannot exceed 200 characters'),
    body('present_street')
      .notEmpty()
      .withMessage('Present Street is required')
      .isLength({max:200})
      .withMessage('Present Street cannot exceed 200 characters'),
    body('present_bldg')
      .notEmpty()
      .withMessage('Present Building is required')
      .isLength({max:200})
      .withMessage('Present Building cannot exceed 200 characters'),
    body('permanent_province')
      .notEmpty()
      .withMessage('Permanent Province is required')
      .isLength({max:200})
      .withMessage('Permanent Province cannot exceed 200 characters'),
    body('permanent_city')
      .notEmpty()
      .withMessage('Permanent City is required')
      .isLength({max:200})
      .withMessage('Permanent City cannot exceed 200 characters'),
    body('permanent_barangay')
      .notEmpty()
      .withMessage('Permanent Barangay is required')
      .isLength({max:200})
      .withMessage('Permanent Barangay cannot exceed 200 characters'),
    body('permanent_street')
      .notEmpty()
      .withMessage('Permanent Street is required')
      .isLength({max:200})
      .withMessage('Permantent Street cannot exceed 200 characters'),
    body('permanent_bldg')
      .notEmpty()
      .withMessage('Permanent Building is required')
      .isLength({max:200})
      .withMessage('Permenent Building cannot exceed 200 characters'),
    body('region_no')
      .notEmpty()
      .withMessage('Region No is required')
      .isLength({max:200})
      .withMessage('Region No cannot exceed 200 characters'),
    body('division_no')
      .notEmpty()
      .withMessage('Division No is required')
      .isLength({max:200})
      .withMessage('Divsion No cannot exceed 200 characters'),
      body('station_no')
      .notEmpty()
      .withMessage('Station No is required')
      .isLength({max:200})
      .withMessage('Station No cannot exceed 200 characters'),
    body('employee_id')
      .notEmpty()
      .withMessage('Employee ID is required')
      .isLength({max:200})
      .withMessage('Employee ID cannot exceed 200 characters'),
    body('school_id')
      .notEmpty()
      .withMessage('School ID is required')
      .isLength({max:200})
      .withMessage('School ID cannot exceed 200 characters'),
      body('email')
      .notEmpty()
      .withMessage('Email is required')
      .isLength({max:200})
      .withMessage('Email cannot exceed 200 characters'),
    body('GSIS')
      .notEmpty()
      .withMessage('GSIS is required')
      .isLength({max:200})
      .withMessage('GSIS cannot exceed 200 characters'),
    body('TIN')
      .notEmpty()
      .withMessage('TIN is required')
      .isLength({max:200})
      .withMessage('TIN cannot exceed 200 characters'),
    body('phone_number')
      .notEmpty()
      .withMessage('Phone Number is required')
      .isLength({max:15})
      .withMessage('Phone Number cannot exceed 15 characters'),
    body('fb_name')
      .if(body('fb_name').notEmpty())
      .isLength({max:200})
      .withMessage('FB Name cannot exceed 200 characters'),
    body('fb_address')
      .if(body('fb_address').notEmpty())
      .isLength({max:200})
      .withMessage('FB Address cannot exceed 200 characters'),
    body('fb_mobile_number')
      .if(body('fb_mobile_number').notEmpty())
      .isLength({max:15})
      .withMessage('FB Mobile Number cannot exceed 15 characters'),
    body('fb_email_address')
      .if(body('fb_email_address').notEmpty())
      .isLength({max:200})
      .withMessage('FB Email Address cannot exceed 200 characters')
  ],
  sendVerification: []
}