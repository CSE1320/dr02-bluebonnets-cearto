########################################################################
####################### Makefile Template ##############################
########################################################################
# Student settings
NAME = YOURNAME
SID = YOURSID
EMAIL = YOURUTAEMAIL
SEMESTER = SPRING2024
HE_PARTNERS = PERSON1_PERSON2_
 

####### DO NOT EDIT BELOW THIS LINE!!! #########
author: 
	@echo $(NAME)
	@echo $(SID)
	@echo $(EMAIL)
	@echo $(SEMESTER)
	@echo $(HE_PARTNERS)
submit:
	zip -r "submission_$(SEMESTER)_$(SID)_$(NAME).zip" .


cleanup:
	@rm -f .DS_Store
	@rm -f */.DS_Store

