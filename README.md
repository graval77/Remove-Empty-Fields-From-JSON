Remove Empty Fields from JSON

JSON is one of the most widely used format to exchange data between a browser and a server. Consider a signup page for new users to create an account. Once a user enters all required fields and clicks the “SAVE” button, his/her personal information will be sent to a RESTFul API endpoint in JSON. When the server receives the data in JSON, it needs to remove all the fields with an empty value, before saving it to database.

RemoveEmptyFields() function will remove all fields with an empty value, from any JSON input.
Following values are considered as empty:
●	null
●	Empty array []
●	Empty object {}
●	Empty string, such as "" or "   "
