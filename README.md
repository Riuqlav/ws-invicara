### Interface

I am assuming the user already has an account logged in, so they won't be redirected to a login or register page.

- The main layout should display Working Stations, in a card or list fashion.

- Each card of the list item indicates the public User Name, Desk Reference, Time Left, and a button to book.

- Book button should open a date/time picker(from MUI for example) I am assuming the rules for the date/time picker (min and max) are already associated with each user profile.

### 1. What REST endpoint Method and URI would you put in place to get a Workstation schedule? Include any query params or request body

I would use the `GET` method, to retrieve the info based on the unique id of each workstation.

### 3. Current reserved status is displayed with either a green dot (currently unreserved) or a red dot.

```
.dotAvailable {
  height: 25px;
  width: 25px;
  background-color: rgb(102, 255, 0);
  border-radius: 50%;
  display: inline-block;
  border: 1px black;
}

.dotUnavailable {
  height: 25px;
  width: 25px;
  background-color: rgb(255, 0, 0);
  border-radius: 50%;
  display: inline-block;
  border: 1px black;
}

.dotMiddle {
  width: 8px;
  height: 8px;
  position: relative;
  background-color: white;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 50%;
}
```

### 4. What REST endpoint Method and URI would you put in place to reserve a Workstation for a specific user? Include any query params or request body data you think it might need.

I would use the `POST` request to create a new session.

```
{
  body {
  workStationId: string,
  userEmail: string,
  booked_at: Date,
  booked_till: Date current_reserved_status: boolean
  }
```

But it would depend on how the backend is setup

### 5.What might be the different types of data you would need to store and access for this app?

I'll need more clarification for the question, but if caught on the spot I suppose you are asking what needs to persist in the cache and what should be in the database.
In this case, I'd only leave in cache user login data, the rest will be in the database, I see no reason for other data for this component to persist.

### 6. What questions would you ask the PM providing these requirements?

Besides all the info given, questions I'd have are:

- How many machines?
- Opening hours?
- How many people are expected?
- Are the rules of time and date a must?
- How often do workstations need to stop for maintenance or cleaning? (to implement availability).
