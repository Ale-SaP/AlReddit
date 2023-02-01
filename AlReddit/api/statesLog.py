import sqlite3

def initialize():
    conn = sqlite3.connect('stateLogs.db')
    c = conn.cursor()
    c.execute('''CREATE TABLE states(state INTEGER)''')

def logState(state):
    conn = sqlite3.connect('stateLogs.db')
    c = conn.cursor()
    c.execute('''INSERT INTO states(state) VALUES (?)''', (state,))
    conn.commit()

def searchForState(state):
    conn = sqlite3.connect('stateLogs.db')
    c = conn.cursor()
    c.execute('''SELECT state
                   FROM states
                   WHERE state=?''', (state,))
    result = c.fetchone()
    if (result == None):
        return False
    else:
        return True
    #Perhaps state should be deleted after being found?

def printAll():
    conn = sqlite3.connect('stateLogs.db')
    c = conn.cursor()
    c.execute('''SELECT * FROM states''')
    results = c.fetchall()
    for e in results:
        print(e)

def deleteSingle(state):
    conn = sqlite3.connect('stateLogs.db')
    c = conn.cursor()
    c.execute('DELETE FROM states WHERE state=?', (state,))
    conn.commit()

def deleteAtWill():
    conn = sqlite3.connect('stateLogs.db')
    c = conn.cursor()
    c.execute('''SELECT * FROM states''')
    results = c.fetchall()
    for e in results:

        choice = input(f"{e}: Delete y or n? ")
        if (choice == "y"):
            sql = 'DELETE FROM states WHERE state=?'
            c.execute(sql, (e[0],))
            conn.commit()