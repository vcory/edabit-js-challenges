function chatroomStatus(users) {
	return users.length === 0 ? 'no one online' : users.length < 3 ? `${users.join(' and ')} online` : `${users[0]}, ${users[1]} and ${users.length - 2} more online`
}
