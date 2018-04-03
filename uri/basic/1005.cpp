#include <iostream>
#include <iomanip>

using namespace std;

int main()
{
    double A,B, result;
    
    cin >> A;
    cin >> B;
    
    result = ((A*3.5)+(B*7.5))/11;

    cout << "MEDIA = " << fixed << setprecision(5) << result << endl;

    return 0;
}
