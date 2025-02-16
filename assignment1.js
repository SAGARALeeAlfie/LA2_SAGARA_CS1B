class Student:
    def __init__(self, first_name, middle_name, last_name, birthdate, birthplace, address, course, dream_job):
        self.first_name = first_name.title()
        self.middle_name = middle_name.title()
        self.last_name = last_name.title()
        self.birthdate = birthdate
        self.birthplace = birthplace.upper()
        self.address = address.upper()
        self.course = course.lower()
        self.dream_job = dream_job.title()
    
    def display_info(self):
        full_name_upper = f"{self.first_name} {self.middle_name} {self.last_name}".upper()
        full_name_lower = f"{self.first_name} {self.middle_name} {self.last_name}".lower()
        print(f"[{full_name_upper}] was born [{self.birthdate}] at [{self.birthplace}], and currently living at [{self.address}]. ")
        print(f"[{full_name_lower}] is taking up [{self.course}] and dreams to be [{self.dream_job}] after graduation.\n")


student1 = Student("Lee Alfie", "Ablan", "Sagara", "February 15, 2006", "Sta.Cruz, ilocos sur, Philippines 2600", "Sta.cruz, Ilocos Sur, Philippines 2710", "Bachelor of Science in Computer Science", "Software Engineer")

student2 = Student("Matthew edgie", "Hafalla", "Hachiles", "May 29, 2006", "Tagudin, Philippines 1004", "Lubong, Sta lucia, Philippines 1000", "Bachelor of Science in Information Technology", "Data Analyst")

student3 = Student("Vhardey John", "Fayusal", "Macabenta", "September 15, 2006", "Zambales, Philippines 1100", "Ayudante, Candon City, Philippines 1101", "Bachelor of Science in Cybersecurity", "Cybersecurity Analyst")


student1.display_info()
student2.display_info()
student3.display_info()
