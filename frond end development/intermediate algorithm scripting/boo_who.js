function booWho(bool) {
    // What is the new fad diet for ghost developers? The Boolean.
    if (typeof bool == "boolean") {
        bool = true;
    } else {
        bool = false;
    }

    return bool;
}

booWho(null);
