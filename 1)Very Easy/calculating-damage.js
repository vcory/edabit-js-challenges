const damage = (damage, speed, time) => (damage < 0 || speed < 0) ?  "invalid" : (time == "second") ? damage * speed : (time == "minute") ? damage * speed * 60 : damage * speed * 3600
