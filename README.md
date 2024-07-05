## Description

Laravel nova package to make action tab above sticky. (DETAIL PAGE)

## Installation

You can install this package via Composer. Run the following command:

```bash
composer require mices/floating-actions
```

## Register class to your App\Providers\NovaServiceProvide

```php
use Mices\FixedMenu\FloatingActions;

public function tools()
{
    return [
        new FloatingActions,
    ];
}
```

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

## Contact

Liong Kah How - jia_how99@hotmail.com
