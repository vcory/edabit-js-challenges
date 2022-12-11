function retrieveMajor(semver) {
	 a = semver.split(".")
    return a[0]
}

function retrieveMinor(semver) {
	 a = semver.split(".")
    return a[1]
}

function retrievePatch(semver) {
	 a = semver.split(".")
    return a[2]
}
