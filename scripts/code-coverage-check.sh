#!/bin/bash

# Hi! Are you here to turn this off because 100% is too strict?
#
# Let me explain. If you set the code coverage to anything other than 100%, if somoene comes along
# and fixes a bug, they might end up deleting a few lines to simplify something or make something
# more efficient. Great right? Go them. And the tests still pass.
#
# But.
#
# If you were riding on the edge of say, 90% coverage, that might take you _below_ your limit,
# because the covered lines _decreased_ by the couple that were deleted. Darn.
#
# Now what? The helpful dev can't just start writing tests for random other bits of your
# application. They only understand the bit they're working on. So they 'temporarily' nudge it
# down to 87%. And so it goes... down to 1% coverage.
#
#
# If you're _sure_ you don't want 100% code coverage, go ahead and edit the stuff below.
# But don't say I didn't warn you!

# 0. Find the project root
PROJDIR="${BASH_SOURCE%/*}";
while [ `ls ${PROJDIR} | grep package.json | wc -l` -lt 1 -a ${#PROJDIR} -lt 1000 ]; do
    PROJDIR="${PROJDIR}/..";
done;
if [ ${#PROJDIR} -gt 1000 ]; then
    echo "ERR: Could not find project root";
    echo "ERR:     Looked for project root all the way back to:";
    echo "ERR:     ${PROJDIR}";
    echo "ERR:     Could not find package.json";
    echo;
    exit 1;
fi;

# 1. Check if test coverage out of date
if find ${PROJDIR}/src -newer ${PROJDIR}/test/coverage/text-summary.txt | grep --silent "";
then
    echo;
    echo "ERR: Coverage is outdated!";
    echo "ERR:     Files in src/ have been edited since test/coverage/text-summary.txt was last updated";
    echo "ERR:     Run 'npm test' to update the coverage output";
    echo;
    exit 1;
fi;

# 2. Display warning if we're below 100%
if [ `cat ${PROJDIR}/test/coverage/text-summary.txt | grep 100% | wc -l` -ne 4 ];
then
    echo;
    echo "ERR: Coverage has decreased!";
    echo "ERR:     Open test/coverage/html/index.html to view coverage";
    echo "ERR:     Increase coverage to 100% to continue";
    echo "ERR:     (you can run 'npm test' to review coverage)";
    echo;
    exit 1;
fi;
