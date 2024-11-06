import smtplib

# Set up server info
EMAIL_HOST = "smtp.gmail.com"
EMAIL_PORT = 465
EMAIL_HOST_USER = "isrealme0@gmail.com"
EMAIL_HOST_PASSWORD = "detnaldvrkytfkkg"  # App-specific password for Gmail

try:
    # Establish a secure connection to the SMTP server
    with smtplib.SMTP_SSL(EMAIL_HOST, EMAIL_PORT) as server:
        server.login(EMAIL_HOST_USER, EMAIL_HOST_PASSWORD)
        
        # Send the email
        from_address = EMAIL_HOST_USER
        to_address = "isrealcrack@gmail.com"
        message = "Subject: Test\n\nThis is a test email from Python."
        server.sendmail(from_address, to_address, message)
        print("Email sent successfully!")

except Exception as e:
    print("Error:", e)
