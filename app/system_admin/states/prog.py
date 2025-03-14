import os

# List of folder names
folder_names = [
    "areas", "clients", "content", "ecommerce", 
    "itsupport", "queries", "request", 
    "schedule", "staff", "states", "zone"
]

# Create folders in the current directory
for folder in folder_names:
    try:
        os.makedirs(folder, exist_ok=True)  # Create folder, ignore if it exists
        print(f"'{folder}' folder created successfully.")
    except Exception as e:
        print(f"Error creating '{folder}' folder: {e}")
