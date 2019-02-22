#!/usr/bin/env python

import RPi.GPIO as GPIO
import MFRC522
import signal

continue_reading = True

def end_read(signal, frame):
	global continue_reading
	continue_reading = False
	GPIO.cleanup()

signal.signal(signal.SIGINT, end_read)
MIFAREReader = MFRC522.MFRC522()

while continue_reading:
	(status, TagType) = MIFAREReader.MFRC522_Request(MIFAREReader.PICC_REQIDL)
	if status == MIFAREReader.MI_OK:
		(status,uid) = MIFAREReader.MFRC522_Anticoll()
		if status == MIFAREReader.MI_OK:

			key = [0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF]
			MIFAREReader.MFRC522_SelectTag(uid)
			status = MIFAREReader.MFRC522_Auth(MIFAREReader.PICC_AUTHENT1A, 1, key, uid)
			if status == MIFAREReader.MI_OK:
				print (str(uid[0])+"."+str(uid[1])+"."+str(uid[2])+"."+str(uid[3]))
				MIFAREReader.MFRC522_StopCrypto1()
				end_read(None, None)
